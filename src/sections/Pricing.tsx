import { twMerge } from "tailwind-merge"
import CheckIcon from "@/assets/check.svg"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
]

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features
        </p>

        <div>
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "rounded-3xl border border-[#f1f1f1] p-10 shadow-[0px_7px_14px_#eaeaea]",
                  inverse === true && "border-black bg-black text-white/60",
                )}
              >
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-black/50">{title}</h3>
                  {popular && (
                    <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
                      <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] bg-clip-text font-medium text-transparent">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-[30px] flex items-baseline gap-1">
                  <span className="text-4xl font-bold leading-none tracking-tighter">
                    ${monthlyPrice}
                  </span>
                  <span className="font-bold tracking-tight text-black/50">
                    /month
                  </span>
                </div>
                <button className="btn btn-primary mt-[30px] w-full">
                  {buttonText}
                </button>
                <ul className="mt-8 flex flex-col gap-5">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4 text-sm">
                      <CheckIcon className="size-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
