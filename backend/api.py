from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import os
import shutil
import json


from agents.evidence_agent import (
    read_evidence,
    extract_people,
    extract_timeline,
    extract_connections
)

from agents.report_agent import generate_report
from agents.memory_agent import save_memory



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


    folder = f"data/{case_id}"



    if not os.path.exists(folder):

        return {

            "error": "Case folder not found"

        }



    files = os.listdir(folder)



    if not files:

        return {

            "error": "No evidence file found"

        }



    evidence_file = os.path.join(

        folder,

        files[0]

    )



    print(
        "Reading:",
        evidence_file
    )



    try:


        evidence = read_evidence(
            evidence_file
        )



        print(
            "========== EVIDENCE =========="
        )

        print(evidence)

        print(
            "=============================="
        )



        people = extract_people(
            evidence
        )



        events = extract_timeline(
            evidence
        )



        connections = extract_connections(
            events
        )



        result = {

            "case_id": case_id,

            "people": people,

            "events": events,

            "connections": connections

        }



        result["report"] = generate_report(
            result
        )



        save_memory(
            result
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

            case["report"] = generate_report(case)

            return case




    return {

        "error": "Case not found"

    }