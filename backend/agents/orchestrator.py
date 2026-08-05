import os

from agents.evidence_agent import (
    read_evidence,
    extract_people,
    extract_timeline,
    extract_connections
)

from agents.report_agent import generate_report
from agents.memory_agent import save_memory


def run_pipeline(case_id):

    print("Starting TraceLens Pipeline...")

    folder = f"data/{case_id}"

    if not os.path.exists(folder):
        raise Exception("Case folder not found")


    files = os.listdir(folder)

    if not files:
        raise Exception("No evidence file found")


    evidence_file = os.path.join(
        folder,
        files[0]
    )


    print("Reading evidence:", evidence_file)


    evidence = read_evidence(
        evidence_file
    )


    print("Extracting people...")

    people = extract_people(
        evidence
    )


    print("Extracting timeline...")

    timeline = extract_timeline(
        evidence
    )


    print("Finding connections...")

    connections = extract_connections(
        timeline
    )


    result = {

        "case_id": case_id,

        "people": people,

        "timeline": timeline,

        "connections": connections

    }


    print("Generating report...")

    result["report"] = generate_report(
        result
    )


    print("Saving memory...")

    save_memory(
        result
    )


    print("Pipeline complete")

    return result