import React from "react";
function DataProtection() {
  return (
    <>
      <section>
        <section className="mt-24 bg-[#007BC2] p-[64px]">
          <span className="w-full block p-10 font-semibold text-white text-[36px] openSans pl-20">
            Data protection
          </span>
        </section>
        <section className=" p-[64px]">
          <p className="flex flex-col justify-center space-y-4 px-20 text-[#18395E] text-[16px]">
            <span className="DataProtectiontiltle">
              1&#41; Information about the collection of personal data and
              contact details of the person responsible
            </span>
            <span>
              <span className="font-bold text-[#18395E]">1.1</span> We are
              pleased that you are visiting our website and thank you for your
              interest. In the following we inform you about the handling of
              your personal data when using our website. Personal data is all
              data with which you can be personally identified.
            </span>
            <span className="text-[16px]">
              <span className="font-bold text-[#18395E]">1.2</span> The person
              responsible for data processing on this website within the meaning
              of the General Data Protection Regulation &#40;GDPR&#41; is
              "Tradeneers GmbH, Ansgar Rolfes, Hermann-Ritter-Str. 112, 28197
              Bremen, Tel.: 0421 8071834 0, a.rolfes@tradeneers.com ". The
              person responsible for the processing of personal data is the
              natural or legal person who alone or jointly with others decides
              on the purposes and means of the processing of personal data.
            </span>
            <span className="text-[16px]">
              <span className="font-bold text-[#18395E]">1.3</span> The person
              responsible has appointed a data protection officer who can be
              reached as follows: "Tradeneers GmbH, Ansgar Rolfes,
              Hermann-Ritter-Str. 112, 28197 Bremen, Tel.: 0421 8071834 0,
              a.rolfes@tradeneers.com"
            </span>
            <span className="text-[16px]">
              <span className="font-bold text-[#18395E]">1.4</span> For security
              reasons and to protect the transmission of personal data and other
              confidential content &#40;eg orders or inquiries to the person
              responsible&#41;, this website uses an SSL or TLS encryption. You
              can recognize an encrypted connection by the character string
              "https://" and the lock symbol in your browser line.
            </span>
            <span className="DataProtectiontiltle">
              2&#41; Data collection when visiting our website
            </span>
            <span className="text-[16px]">
              If you only use our website for informational purposes, i.e. if
              you do not register or otherwise provide us with information, we
              only collect data that your browser transmits to our server <br />
              (so-called "server log files"). When you visit our website, we
              collect the following data that is technically necessary for us to
              display the website to you:
            </span>
            <ul className=" list-disc ml-8 text-[16px]">
              <li>Our visited website</li>
              <li>Date and time at the time of access</li>
              <li>Amount of data sent in bytes</li>
              <li>Source/reference from which you came to the page</li>
              <li>Browser used</li>
              <li>Operating system used</li>
              <li>IP address used (if necessary: ​​in anonymous form)</li>
            </ul>
            <span className="text-[16px]">
              The processing takes place in accordance with Article 6 Paragraph
              1 Letter f GDPR on the basis of our legitimate interest in
              improving the stability and functionality of our website. The data
              will not be passed on or used in any other way. However, we
              reserve the right to subsequently check the server log files if
              there are concrete indications of illegal use.
            </span>
            <span className="DataProtectiontiltle">3&#41; Cookies</span>
            <span>
              In order to make visiting our website attractive and to enable the
              use of certain functions, we use so-called cookies on various
              pages. These are small text files that are stored on your end
              device. Some of the cookies we use are deleted after the end of
              the browser session, i.e. after closing your browser (so-called
              session cookies). Other cookies remain on your end device and
              enable us or our partner companies (third-party cookies) to
              recognize your browser on your next visit (persistent cookies). If
              cookies are set, they collect and process certain user information
              such as browser and location data as well as IP address values
              ​​to an individual extent. Persistent cookies are automatically
              deleted after a specified period,
            </span>
            <span className="text-[16px]">
              If personal data is also processed by individual cookies
              implemented by us, the processing takes place in accordance with
              Article 6 Paragraph 1 Letter b GDPR either to execute the contract
              or in accordance with Article 6 Paragraph 1 Letter f GDPR to
              safeguard our legitimate interests the best possible functionality
              of the website and a customer-friendly and effective design of the
              page visit.
            </span>
            <span className="text-[16px]">
              We may work with advertising partners who help us to make our
              website more interesting for you. For this purpose, cookies from
              partner companies are also stored on your hard drive when you
              visit our website (third-party cookies). If we work together with
              the aforementioned advertising partners, you will be informed
              individually and separately about the use of such cookies and the
              scope of the information collected in each case within the
              following paragraphs.
            </span>
            <span className="text-[16px]">
              Internet Explorer:
              <a
                href="http://windows.microsoft.com /de-DE/windows-vista
                /Block-or-allow-cookies"
              >
                http://windows.microsoft.com /de-DE/windows-vista
                /Block-or-allow-cookies
              </a>
              <br />
              Firefox:
              <a
                href="https://support.mozilla.org /de /kb /cookies-erlauben-und-
                reject"
              >
                https://support.mozilla.org /de /kb /cookies-erlauben-und-
                reject
              </a>
              <br />
              Chrome:
              <a
                href="http://support.google.com /chrome /bin /answer.py ?hl=de
                &hlrm=en &answer=95647"
              >
                http://support.google.com /chrome /bin /answer.py ?hl=de
                &hlrm=en &answer=95647
              </a>
              <br />
              Safari:
              <a href="https://support.apple.com/de-de /guide /safari / sfri11471 /mac">
                https://support.apple.com/de-de /guide /safari / sfri11471 /mac
              </a>
              <br />
              Opera:
              <a href="http://help.opera.com /Windows /10.20 /de/cookies.html">
                http://help.opera.com /Windows /10.20 /de/cookies.html
              </a>
            </span>
            <img src="/assets/images/inline.png" alt="orange logo" className="w-[30%] pt-5"/>
          </p>
        </section>
      </section>
    </>
  );
}

export default DataProtection;
