import re


def read_evidence(file_path):
    with open(file_path, "r") as file:
        return file.read()


def extract_timeline(evidence):
    timeline = []

    lines = evidence.split("\n")

    for line in lines:
        if line.strip():
            time = line[:5]
            event = line[6:]

            timeline.append({
                "time": time,
                "event": event
            })

    return timeline


def extract_people(evidence):
    people = set()

    names = re.findall(r"\b[A-Z][a-z]+\b", evidence)

    for name in names:
        people.add(name)

    return list(people)


if __name__ == "__main__":

    evidence = read_evidence("data/case_001/chat.txt")

    result = {
        "people": extract_people(evidence),
        "timeline": extract_timeline(evidence)
    }

    print(result)