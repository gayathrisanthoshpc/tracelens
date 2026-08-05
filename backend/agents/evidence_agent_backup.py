import re
import spacy


# Load NLP model
try:
    nlp = spacy.load("en_core_web_sm")

except Exception:

    nlp = None

    print(
        "spaCy model not found. Using fallback extraction."
    )



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
    Extract people names using NLP
    """

    people = []


    if nlp:

        doc = nlp(text)


        for ent in doc.ents:

            if ent.label_ == "PERSON":

                people.append(
                    ent.text
                )


    # fallback if spaCy finds nothing

    if not people:

        words = text.split()

        for word in words:

            if word.istitle():

                people.append(
                    word.strip(".")
                )


    return list(set(people))





def extract_timeline(text):

    """
    Extract events with time
    """

    events = []


    lines = text.splitlines()


    for line in lines:

        line = line.strip()


        if not line:
            continue



        match = re.search(

            r"(?:at\s*)?(\d{1,2}:\d{2})(?:\s*(AM|PM))?\s*(.*)",

            line,

            re.IGNORECASE

        )


        if match:


            events.append({

                "time": match.group(1),

                "event": match.group(3).strip()

            })


    return events






def extract_connections(events):

    """
    Extract relationships between people
    """

    connections = []


    for event in events:


        people = extract_people(

            event["event"]

        )


        if len(people) >= 2:


            connections.append({

                "source": people[0],

                "target": people[1],

                "relation": event["event"]

            })


    return connections