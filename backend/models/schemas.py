from pydantic import BaseModel


class Event(BaseModel):
    time: str
    event: str


class CaseAnalysis(BaseModel):
    case_id: str
    people: list[str]
    events: list[Event]