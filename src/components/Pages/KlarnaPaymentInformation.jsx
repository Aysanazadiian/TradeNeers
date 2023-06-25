import React from "react";
function KlarnaPaymentInformation() {
  return (
    <>
      <section className=" p-[64px] mt-24">
        <p className="flex flex-col justify-center space-y-4 px-20 text-[#18395E] text-[14px]">
          <span>
            <span className="DataProtectiontiltle">
              Klarna payment information
            </span>
            <br />
            <span>
              In cooperation with Klarna Bank AB (publ), Sveavägen 46, 111 34
              Stockholm, Sweden, we offer the following payment options. Payment
              is made to Klarna in each case:
            </span>
          </span>
          <ul className=" list-disc ml-8 text-[14px]">
            <li>
              Invoice: The payment period is 14 days from the dispatch of the
              goods/the ticket/or, in the case of other services, the provision
              of the service. The invoice conditions for purchase on account for
              deliveries to Germany can be found at
              <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/EID/de_de/invoice?fee=0">
                https://cdn.klarna.com/1.0/shared/content/legal/terms/EID/de_de/invoice?fee=0
              </a>
              and for deliveries to Austria at{" "}
              <a
                href="https://cdn
              .klarna.com/1.0/shared/content/legal/terms/EID/de_at/invoice?fee=0"
              >
                {" "}
                https://cdn
                .klarna.com/1.0/shared/content/legal/terms/EID/de_at/invoice?fee=0
              </a>
              .
            </li>
            <li>
              Installment purchase: With Klarna's financing service, you can
              flexibly pay for your purchase in monthly installments of at least
              1/24 of the total amount (but at least EUR 6.95) or under the
              conditions otherwise specified in the checkout. The installment
              payment is due at the end of the month after Klarna has sent a
              monthly invoice. Further information on installment purchase
              including the general terms and conditions and the European
              standard information for consumer credit can be found here:
              <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/EID/de_de/account">
                https://cdn.klarna.com/1.0/shared/content/legal/terms/EID/de_de/account
              </a>
            </li>
            <li>
              Immediately: Your account will be debited immediately after
              placing the order.
            </li>
            <li>
              Direct debit: The debit takes place after the goods have been
              shipped. You will be informed of the time by email. (Please only
              list those payment methods that you also offer.)
            </li>
          </ul>
          <span>
            The use of the payment methods invoice, installment purchase and
            direct debit requires a positive credit check. In this respect, we
            forward your data to Klarna for the purpose of address and
            creditworthiness checks as part of the purchase initiation and
            processing of the purchase contract. Please understand that we can
            only offer you those payment methods that are permissible based on
            the results of the credit check. Further information and Klarna's
            terms of use for Germany can be found here:
            <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/K502554/de_de/user">
            https://cdn.klarna.com/1.0/shared/content/legal/terms/K502554/de_de/user
            </a>
            and for Austria here:
            <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/K502554/de_at/user ">
            https://cdn.klarna.com/1.0/shared/content/legal/terms/K502554/de_at/user 
            </a>
            . General
            information about Klarna is available here: www.klarna.com. Your
            personal information will be treated by Klarna in accordance with
            the applicable data protection regulations and in accordance with
            the information in Klarna's data protection regulations
            Germany/Austria. (Please only add this paragraph if you also use at
            least one of the payment methods listed here (invoice, installment
            purchase and/or direct debit). only offer and list here those
            payment methods that you also offer.)
          </span>
        </p>
      </section>
    </>
  );
}

export default KlarnaPaymentInformation;
