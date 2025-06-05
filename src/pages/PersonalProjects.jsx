import React from "react";

export default function PersonalProjects() {
  return (
    <div className="p-6 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold">Personal Projects</h1>
      <div>
        <h2 className="text-xl font-semibold">Queue Patterns</h2>
        <p>Deep dive into different types of queues and their use cases.</p>
        <p><strong>Tech:</strong> Python</p>
        <a className="text-blue-600 underline" href="https://github.com/arunsaiv/queue-patterns" target="_blank">GitHub Repo</a>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Rate Limiting Patterns</h2>
        <p>Different ways to limit traffic using distributed and non-distributed systems.</p>
        <p><strong>Tech:</strong> Python</p>
        <a className="text-blue-600 underline" href="https://github.com/arunsaiv/rate-limiting-patterns" target="_blank">GitHub Repo</a>
      </div>
      <div>
        <h2 className="text-xl font-semibold">GraphQL with Python</h2>
        <p>Building a GraphQL API from scratch using Python.</p>
        <p><strong>Tech:</strong> Python</p>
        <a className="text-blue-600 underline" href="https://github.com/arunsaiv/graphql-python" target="_blank">GitHub Repo</a>
      </div>
    </div>
  );
}
