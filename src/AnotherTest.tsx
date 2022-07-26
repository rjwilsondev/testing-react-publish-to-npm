import React from "react";

export interface AnotherTestProps {
  /** The person you want to say goodbye to (required)*/
  name: string
}

export default function AnotherTest({name = "World"}: AnotherTestProps) {
  return <div>Goodbye {name}</div>;
}
