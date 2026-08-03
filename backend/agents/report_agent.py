def generate_report(case_data):

    people = case_data.get("people", [])
    events = case_data.get("events", [])

    findings = []


    # Convert events into text safely
    event_text = ""

    for event in events:

        if isinstance(event, dict):

            event_text += (
                event.get("event", "")
                .lower()
                + " "
            )

        else:

            event_text += (
                str(event)
                .lower()
                + " "
            )



    # Generate findings

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


    # Default finding if nothing detected

    if not findings:
        findings.append(
            "No significant activity detected"
        )



    return {

        "risk": "Medium",

        "confidence": 85,

        "summary": (
            f"{', '.join(people)} were involved in "
            "the analyzed evidence."
        ),

        "findings": findings

    }