print("REPORT AGENT LOADED")



def calculate_risk(event_text):

    high_risk_words = [
        "fraud",
        "scam",
        "fake",
        "illegal",
        "threat",
        "stolen",
        "attack"
    ]


    medium_risk_words = [
        "payment",
        "money",
        "transfer",
        "document",
        "transaction"
    ]



    for word in high_risk_words:

        if word in event_text:

            return "High"



    for word in medium_risk_words:

        if word in event_text:

            return "Medium"



    return "Low"





def calculate_confidence(people, events):

    confidence = 50


    if people:

        confidence += 20



    if events:

        confidence += 20



    if len(events) > 3:

        confidence += 10



    return min(confidence,95)






def generate_report(case_data):


    people = case_data.get(
        "people",
        []
    )


    events = case_data.get(
        "events",
        []
    )



    findings = []



    event_text = " ".join(

        [
            e.get("event","")
            for e in events
        ]

    ).lower()



    if "contact" in event_text:

        findings.append(
            "Direct communication detected"
        )



    if "document" in event_text:

        findings.append(
            "Document exchange observed"
        )



    if "payment" in event_text:

        findings.append(
            "Payment confirmation found"
        )



    if "fraud" in event_text:

        findings.append(
            "Potential fraudulent activity detected"
        )



    if not findings:

        findings.append(
            "No significant activity detected"
        )



    return {


        "risk": calculate_risk(event_text),


        "confidence": calculate_confidence(
            people,
            events
        ),


        "summary":
            f"{', '.join(people)} were involved in the analyzed evidence."
            if people
            else
            "No identifiable individuals found.",


        "findings": findings

    }