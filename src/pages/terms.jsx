import { useState } from "react";
import Button from "../components/button";
import { Wrapper } from "../styles/Global";
import { Container, Info } from "../styles/pages/terms";

export const Terms = () => {
  const [current, setCurrent] = useState(true);

  const handleClick = () => {
    setCurrent(!current);
  };

  return (
    <Container>
      <Info>
        <Info onClick={handleClick}>
          <Button
            info={{
              type: "button",
              content: "Privacy Policy",
              fontSize: "1.0rem",
              paddingX: "10px",
              paddingY: "12px",
              borderRadius: "16px",
              Full: true,
              width: "auto",
            }}
          />
        </Info>

        <Info onClick={handleClick}>
          <Button
            info={{
              type: "button",
              content: "Terms of Service",
              fontSize: "1.0rem",
              paddingX: "10px",
              paddingY: "12px",
              borderRadius: "16px",
              Full: true,
              width: "auto",
            }}
          />
        </Info>
      </Info>

      {current ? (
        <>
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. It is <strong>ORGANIZE </strong>
            policy to respect your privacy regarding any information we may
            collect from you across our website,
            <a href={"https://organize.vercel.app"}> ORGANIZE</a>, and other
            sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorised access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <h2>
            <strong>Cookie Policy</strong> for <strong>ORGANIZE</strong>
          </h2>
          <p>
            This is the Cookie Policy for <strong>ORGANIZE</strong>, accessible
            from URL
          </p>
          <h3>What Are Cookies</h3>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
          <h3>How We Use Cookies</h3>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <h3>Disabling Cookies</h3>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>
          <h3>The Cookies We Set</h3>
          <ul>
            <li>
              Account related cookies <br />
              If you create an account with us then we will use cookies for the
              management of the signup process and general administration. These
              cookies will usually be deleted when you log out however in some
              cases they may remain afterwards to remember your site preferences
              when logged out.
            </li>
            <li>
              Login related cookies <br />
              We use cookies when you are logged in so that we can remember this
              fact. This prevents you from having to log in every single time
              you visit a new page. These cookies are typically removed or
              cleared when you log out to ensure that you can only access
              restricted features and areas when logged in.
            </li>
            <li>
              Email newsletters related cookies <br />
              <br />
              This site offers newsletter or email subscription services and
              cookies may be used to remember if you are already registered and
              whether to show certain notifications which might only be valid to
              subscribed/unsubscribed users.
            </li>
            <li>
              Orders processing related cookies <br />
              This site offers e-commerce or payment facilities and some cookies
              are essential to ensure that your order is remembered between
              pages so that we can process it properly.
            </li>
            <li>
              Surveys related cookies <br />
              From time to time we offer user surveys and questionnaires to
              provide you with interesting insights, helpful tools, or to
              understand our user base more accurately. These surveys may use
              cookies to remember who has already taken part in a survey or to
              provide you with accurate results after you change pages.
            </li>
            <li>
              Forms related cookies <br />
              When you submit data to through a form such as those found on
              contact pages or comment forms cookies may be set to remember your
              user details for future correspondence.
            </li>
            <li>
              Site preferences cookies <br />
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </li>
          </ul>
          <h3>Third Party Cookies</h3>
          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
          <ul>
            <li>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content. For more information on
              Google Analytics cookies, see the official Google Analytics page.
              <li>
                Third party analytics are used to track and measure usage of
                this site so that we can continue to produce engaging content.
                These cookies may track things such as how long you spend on the
                site or pages you visit which helps us to understand how we can
                improve the site for you.
              </li>
              <li>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimisations our users appreciate
                the most.
              </li>
              <li>
                As we sell products it's important for us to understand
                statistics about how many of the visitors to our site actually
                make a purchase and as such this is the kind of data that these
                cookies will track. This is important to you as it means that we
                can accurately make business predictions that allow us to
                monitor our advertising and product costs to ensure the best
                possible price.
              </li>
            </li>
            <li>
              We also use social media buttons and/or plugins on this site that
              allow you to connect with your social network in various ways. For
              these to work the following social media sites including, will set
              cookies through our site which may be used to enhance your profile
              on their site or contribute to the data they hold for various
              purposes outlined in their respective privacy policies.
            </li>
          </ul>
          <h2>More Information</h2>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>
          <p>
            This policy is effective as of <strong>May</strong>
            <strong>2021</strong>.
          </p>{" "}
        </>
      ) : (
        <>
          <h2>1.Terms of Service</h2>
          <h3>1. Terms</h3>
          <p>
            By accessing the website at
            <a href={"https://organize.vercel.app/"}>ORGANIZE</a> you are
            agreeing to be bound by these terms of service, all applicable laws
            and regulations, and agree that you are responsible for compliance
            with any applicable local laws. If you do not agree with any of
            these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <h3>2. Use License</h3>
          <ol>
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on ORGANIZE's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a licence, not a transfer of title, and under this
              licence you may not:
              <ol>
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on ORGANIZE website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or 'mirror' the
                  materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              2. This licence shall automatically terminate if you violate any
              of these restrictions and may be terminated by ORGANIZE at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this licence, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </li>
          </ol>
          <h3>3. Disclaimer</h3>
          <ol>
            <li>
              1. The materials on ORGANIZE's website are provided on an 'as is'
              basis. ORGANIZE makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              2. Further, ORGANIZE does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on its website or otherwise relating to such
              materials or on any sites linked to this site.
            </li>
          </ol>
          <h3>4. Limitations</h3>
          <p>
            In no event shall ORGANIZE or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on ORGANIZE's website, even if
            ORGANIZE or a ORGANIZE authorised representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <h3>5. Accuracy of materials</h3>
          <p>
            The materials appearing on ORGANIZE's website could include
            technical, typographical, or photographic errors. ORGANIZE does not
            warrant that any of the materials on its website are accurate,
            complete or current. ORGANIZE may make changes to the materials
            contained on its website at any time without notice. However
            ORGANIZE does not make any commitment to update the materials.
          </p>
          <h3>6. Links</h3>
          <p>
            ORGANIZE has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by ORGANIZE of the
            site. Use of any such linked website is at the user's own risk.
          </p>
          <h3>7. Modifications</h3>
          <p>
            ORGANIZE may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of ORGANIZE and you irrevocably submit to
            the exclusive jurisdiction of the courts in that State or location.
          </p>
        </>
      )}
      <Wrapper Height={"10vh"} />
    </Container>
  );
};
