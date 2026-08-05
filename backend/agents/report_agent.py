print("REPORT AGENT LOADED")



def generate_report(case_data):


    people = case_data.get(
        "people",
        []
    )


    events = case_data.get(
        "timeline",
        []
    )



    findings = []



    event_text = " ".join(

        [

            e.get("event","")

            for e in events

            if isinstance(e,dict)

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




    if not findings:

        findings.append(
            "No significant activity detected"
        )




    risk = "Low"


    if "payment" in event_text:

        risk = "Medium"



    if "fraud" in event_text or "scam" in event_text:

        risk = "High"





    summary = (

        f"{', '.join(people)} "

        "were involved in the analyzed evidence."

    )



    confidence = 80



    if len(events) > 2:

        confidence = 90




    return {


        "risk": risk,


        "confidence": confidence,


        "summary": summary,


        "findings": findings


    }