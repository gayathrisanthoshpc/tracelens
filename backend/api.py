from fastapi import FastAPI

from agents.evidence_agent import (
    read_evidence,
    extract_people,
    extract_timeline
)

from agents.memory_agent import save_memory


app = FastAPI(
    title="TraceLens API"
)


@app.get("/")
def home():
    return {
        "message": "TraceLens API running"
    }


@app.get("/analyze/{case_id}")
def analyze_case(case_id: str):

    evidence = read_evidence(
        f"data/{case_id}/chat.txt"
    )

    result = {
        "case_id": case_id,
        "people": extract_people(evidence),
        "events": extract_timeline(evidence)
    }

    save_memory(result)

    return result