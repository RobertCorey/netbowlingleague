import { useEffect } from "react";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: "7684074",
          formId: "c72f1669-6505-4b23-85bb-392410eacf4f",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <div className="p-4">
      <div id="hubspotForm"></div>
    </div>
  );
};
