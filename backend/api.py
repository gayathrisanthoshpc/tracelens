from fastapi import FastAPI, UploadFile, File

from fastapi.middleware.cors import CORSMiddleware

import os
import shutil
import json


from agents.orchestrator import run_pipeline



app = FastAPI(
    title="TraceLens API"
)



app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)



MEMORY_FILE = "memory/case_memory.json"



@app.get("/")
def home():

    return {

        "message": "TraceLens API running"

    }





@app.post("/upload/{case_id}")
def upload_evidence(

    case_id: str,

    file: UploadFile = File(...)

):

    folder = f"data/{case_id}"


    os.makedirs(
        folder,
        exist_ok=True
    )


    file_path = os.path.join(

        folder,

        file.filename

    )


    with open(

        file_path,

        "wb"

    ) as buffer:

        shutil.copyfileobj(

            file.file,

            buffer

        )


    return {

        "message": "Evidence uploaded successfully",

        "file": file.filename,

        "case_id": case_id

    }





@app.get("/analyze/{case_id}")
def analyze_case(case_id: str):


    print(
        "========== ANALYZE ROUTE CALLED =========="
    )


    try:


        result = run_pipeline(

            case_id

        )


        return result



    except Exception as e:


        print(
            "ERROR:",
            e
        )


        return {

            "error": str(e)

        }






@app.get("/cases")
def get_cases():


    if not os.path.exists(MEMORY_FILE):

        return {

            "total_cases": 0,

            "cases": []

        }



    with open(

        MEMORY_FILE,

        "r"

    ) as file:

        data = json.load(file)



    if isinstance(data, dict) and "cases" in data:

        cases = data["cases"]

    else:

        cases = data



    return {

        "total_cases": len(cases),

        "cases": [

            case["case_id"]

            for case in cases

        ]

    }





@app.get("/cases/{case_id}")
def get_case(case_id: str):


    if not os.path.exists(MEMORY_FILE):

        return {

            "error": "No cases found"

        }



    with open(

        MEMORY_FILE,

        "r"

    ) as file:

        data = json.load(file)



    if isinstance(data, dict) and "cases" in data:

        cases = data["cases"]

    else:

        cases = data



    for case in cases:


        if case["case_id"] == case_id:


            return case



    return {

        "error": "Case not found"

    }