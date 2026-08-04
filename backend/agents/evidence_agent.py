import re


def read_evidence(file_path):
    """
    Reads uploaded evidence file
    """

    with open(
        file_path,
        "r",
        encoding="utf-8",
        errors="ignore"
    ) as file:

        return file.read()



def extract_people(text):
    """
    Extract people names from evidence
    """

    people = []

    known_names = [
        "Rahul",
        "Arjun",
        "Priya",
        "Akhil",
        "Sneha"
    ]

    for name in known_names:

        if name.lower() in text.lower():

            people.append(name)

    return people




def extract_timeline(text):
    """
    Extract events with time
    Example:
    10:30 Rahul contacted Arjun.
    """

    events = []

    lines = text.splitlines()

    for line in lines:

        line = line.strip()

        if not line:
            continue


        match = re.search(
            r"(\d{1,2}:\d{2})\s*(.*)",
            line
        )


        if match:

            events.append({

                "time": match.group(1),

                "event": match.group(2).strip()

            })


    return events




def extract_connections(events):
    """
    Extract relationships between people
    """

    connections = []


    for event in events:

        text = event["event"]


        if "Rahul" in text and "Arjun" in text:

            connections.append({

                "source": "Rahul",

                "target": "Arjun",

                "relation": text

            })


        elif "Arjun" in text and "Rahul" in text:

            connections.append({

                "source": "Arjun",

                "target": "Rahul",

                "relation": text

            })


    return connections