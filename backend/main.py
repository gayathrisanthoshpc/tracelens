from agents.evidence_agent import read_evidence, extract_people, extract_timeline
from agents.memory_agent import save_memory


def run_tracelens(case_id):

    print("Starting TraceLens Analysis...\n")

    evidence = read_evidence(
        f"data/{case_id}/chat.txt"
    )

    people = extract_people(evidence)
    timeline = extract_timeline(evidence)

    case_data = {
        "case_id": case_id,
        "people": people,
        "events": timeline
    }

    save_memory(case_data)

    print("Analysis Complete!")
    print(case_data)


if __name__ == "__main__":

    run_tracelens("case_001")