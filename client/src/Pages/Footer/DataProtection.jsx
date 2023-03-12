import React from "react";
import NavBar from "../../components/Nav/NavBar";
import './DataProtection.css'


const Data = () => {
    return (
        <div className="bckrn">
            <NavBar />
            <div className="texts">
                <h1>PERSONAL DATA PROTECTION</h1>
                <h5> What is Personal Data?
                </h5>
                <p>
                    Personal Data is all information of any kind referring to individuals or persons of ideal existence.
                </p>
                <h5>What law protects Personal Data and what is its purpose?</h5>
                <p>The law that protects Personal Data is No. 25,326. The main objective of this law and its complementary regulations is the comprehensive protection of personal data stored in files, registries, data banks or other technical data processing mechanisms, whether these data are public or private, granting protection to people over their right to honor and privacy, as well as to guarantee access to the information that is recorded about them, in accordance with the provisions of article 43, third paragraph of the National Constitution.
                </p>
                <h5>How is this regulation put into practice?</h5>
                <p>In compliance with the provisions of Article 6 of Law 25,326, when we collect personal data from people, we previously inform their owners of the purpose for which said data will be processed and who their recipients or class of recipients may be. Likewise, we will notify the owner of the data of the existence of the file, registry, data bank, electronic or of any other type, in question and the identity and address of the person in charge and we will define the mandatory or optional nature of the responses to the questionnaire that is propose, especially when dealing with sensitive data. In addition, we will inform you of the consequences of providing the data, the refusal to do so or the inaccuracy thereof. Likewise, we will notify the owner of the data of the possibility of exercising their rights, which consists of access, rectification and deletion of the data.</p>
                <p>By virtue of the foregoing, we inform you that the aforementioned rights of the data owner include the possibility of requesting information from the control body regarding the existence of files, records, databases or personal data banks, their purposes and the identity of those responsible for them. of his person. In this sense, the owner of the data, after proving his identity, has the right to request and obtain information on his personal data included in public or private data banks intended to provide reports. Those obliged to inform must do so clearly, free of coding and, where appropriate, accompanied by an explanation, in language accessible to the average knowledge of the population, of the terms used. In broad terms, everyone has the right to have the personal data of which they are the owner, which are included in a data bank, rectified, updated and, when appropriate, deleted or subjected to confidentiality.</p>
                <p>Finally, it should be noted that the AGENCY OF ACCESS TO PUBLIC INFORMATION, in its capacity as Control Body of Law No. 25,326, has the power to deal with complaints and claims filed by those who are affected in their rights due to non-compliance with current regulations. regarding the protection of personal data”</p>
            </div>
        </div>
    )
}

export default Data;