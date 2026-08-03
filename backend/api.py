from fastapi import FastAPI, UploadFile, File
import os

from models.schemas import CaseAnalysis

from agents.evidence_agent import (
    read_evidence,
    extract_people,
    extract_timeline
)

from agents.memory_agent import (
    save_memory,
    get_memory
)


app = FastAPI(
    title="TraceLens API",
    version="0.1.0"
)


@app.get("/")
def home():
    return {
        "message": "TraceLens API running"
    }


@app.post("/upload/{case_id}")
async def upload_evidence(
    case_id: str,
    file: UploadFile = File(...)
):

    folder = f"data/{case_id}"

    os.makedirs(folder, exist_ok=True)

    file_path = f"{folder}/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    return {
        "message": "Evidence uploaded successfully",
        "file": file.filename,
        "case_id": case_id
    }


@app.get("/analyze/{case_id}", response_model=CaseAnalysis)
def analyze_case(case_id: str):

    folder = f"data/{case_id}"

    if not os.path.exists(folder):
        return {
            "case_id": case_id,
            "people": [],
            "events": []
        }


    files = os.listdir(folder)

    if len(files) == 0:
        return {
            "case_id": case_id,
            "people": [],
            "events": []
        }


    file_path = f"{folder}/{files[0]}"

    evidence = read_evidence(file_path)


    result = {
        "case_id": case_id,
        "people": extract_people(evidence),
        "events": extract_timeline(evidence)
    }


    save_memory(result)

    return result
@app.get("/memory")
def memory():

    cases = get_memory()

    return {
        "total_cases": len(cases),
        "cases": cases
    }