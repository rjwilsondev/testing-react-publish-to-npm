import React from "react";

export interface TestProps {
  /** The person you want to say hello to*/
  name?: string
}

export function Test({name = "World"}: TestProps) {
  return <div>Hello {name}</div>;
}
