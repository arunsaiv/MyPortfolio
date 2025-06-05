import React from "react";

export default function ProfessionalProjects() {
  return (
    <div className="p-6 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold">Professional Projects</h1>
      <div>
        <h2 className="text-xl font-semibold">Maxval Renewal Services (MaRS)</h2>
        <p>
          Global platform for managing patent annuities and trademark renewals across 175+ countries.
          Built reliable, automated workflows, integrated Symphony, and handled cost optimization rules.
        </p>
        <p><strong>Tech:</strong> Salesforce, Apex, API</p>
        <p><strong>Role:</strong> Technical Lead and Manager</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Maxval API</h2>
        <p>
          Developed core data service for patent scraping, data pipelines, and integrations using bots and OCR.
          Delivered robust backend for patent automation via AWS SQS and CloudWatch.
        </p>
        <p><strong>Tech:</strong> REST API, T-SQL, AWS SQS, CloudWatch, OCR, Python</p>
        <p><strong>Role:</strong> Technical Lead</p>
      </div>
    </div>
  );
}
