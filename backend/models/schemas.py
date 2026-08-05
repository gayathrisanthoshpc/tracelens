from pydantic import BaseModel
from typing import Optional


class Event(BaseModel):

    time: str
    event: str



class Connection(BaseModel):

    source: str
    target: str
    relation: str



class Report(BaseModel):

    risk: str
    confidence: int
    summary: str
    findings: list[str]



class CaseAnalysis(BaseModel):

    case_id: str

    people: list[str]

    events: list[Event]

    connections: Optional[list[Connection]] = []

    report: Optional[Report] = None

    created_at: Optional[str] = None