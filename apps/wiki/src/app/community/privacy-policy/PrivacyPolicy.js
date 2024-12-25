import "./PrivacyPolicy.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import TextBlock from "@/src/components/textblock/TextBlock";

const PrivacyPolicy = () => {

    return <>
        <Prologue imageSrc={"/community/xp_scroll_uncommon.webp"} alt="" maxHeight="80px">
            The Privacy Policy for HoH-Atlas outlines how we collect, use, and protect your personal information when you visit and interact with our website.
            This page ensures transparency and helps you understand your privacy rights while using the HoH-Atlas Wiki.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1>Privacy Policy</H1>

            <p>At HoH-Atlas, accessible from hoh-atlas.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HoH-Atlas and how we use it.</p>
            
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in HoH-Atlas. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the <a className="text-link" href="https://www.privacypolicygenerator.info/">Privacy Policy Generator</a>.</p>
            
            <H1>Consent</H1>
            
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            
            <H1>Information we collect</H1>
            
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            <p>If you contact us directly, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            
            <H1>How we use your information</H1>
            
            <p>We use the information we collect in various ways, including to:</p>
            
            <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new features and functionality</li>
                <li>Communicate with you, to provide you with updates and other information relating to the website</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
            </ul>
            
            <H1>Log Files</H1>
            
            <p>HoH-Atlas follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
            
            <H1>Cookies and Web Beacons</H1>
            
            <p>Like any other website, HoH-Atlas uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            
            <H1>Third Party Privacy Policies</H1>
            
            <p>HoH-Atlas's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
            
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

        </TextBlock>
    </>
}

export default PrivacyPolicy;