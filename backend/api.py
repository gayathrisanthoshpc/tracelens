from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import os
import shutil
import json

from agents.orchestrator import run_pipeline


app = FastAPI(
    title="TraceLens API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "http://localhost:5177",
        "http://localhost:5178",
        "http://localhost:5179",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "success": True,
        "message": "Evidence uploaded successfully",
        "case_id": case_id,
        "filename": file.filename
    }


@app.get("/analyze/{case_id}")
def analyze_case(case_id: str):

    try:

        result = run_pipeline(case_id)

        return result

    except Exception as e:

        print("ANALYSIS ERROR:", e)

        return {
            "success": False,
            "error": str(e)
        }


@app.get("/cases")
def get_cases():

    if not os.path.exists(MEMORY_FILE):
        return {
            "total_cases": 0,
            "cases": []
        }

    try:

        with open(
            MEMORY_FILE,
            "r",
            encoding="utf-8"
        ) as file:

            data = json.load(file)

    except Exception:

        return {
            "total_cases": 0,
            "cases": []
        }

    cases = data.get("cases", [])

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

    try:

        with open(
            MEMORY_FILE,
            "r",
            encoding="utf-8"
        ) as file:

            data = json.load(file)

    except Exception:

        return {
            "error": "Memory file corrupted"
        }

    cases = data.get("cases", [])

    for case in cases:

        if case["case_id"] == case_id:
            return case

    return {
        "error": "Case not found"
    }