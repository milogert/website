import React from 'react'

export const OverviewCard = () => (
  <div className="max-w-lg border border-primary rounded shadow-xl shadow-primary flex p-5 my-10 bg-brand flex-col sm:flex-row items-center sm:items-start mx-4">
    <div className="h-24 w-24 mr-5">
      <img
        className="object-cover w-full rounded-full"
        src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200"
      />
    </div>
    <div className="items-center sm:items-start">
      <div className="text-xl mb-2">
        Milo Gertjejansen
        <div className="text-secondary">Machine Sorcerer</div>
      </div>
      <div className="text-secondary">
        <ul>
          <li className="flex justify-between flex-col md:flex-row">
            <span className="font-bold mr-2">GitHub</span>
            <a className="text-link" href="https://github.com/milogert">
              https://github.com/milogert
            </a>
          </li>
          <li className="flex justify-between flex-col md:flex-row">
            <span className="font-bold mr-2">Email</span>
            <a
              className="text-link"
              href="mailto:&#109;&#105;&#108;&#111;+&#115;&#105;&#116;&#101;&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#108;&#111;&#103;&#101;&#114;&#116;&#046;&#099;&#111;&#109;"
            >
              &#109;&#105;&#108;&#111;+&#115;&#105;&#116;&#101;&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#108;&#111;&#103;&#101;&#114;&#116;&#046;&#099;&#111;&#109;
            </a>
          </li>
          <li className="flex justify-between flex-col md:flex-row">
            <span className="font-bold mr-2">LinkedIn</span>
            <a className="text-link" href="https://linkedin.com/in/milogert">
              https://linkedin.com/in/milogert
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
