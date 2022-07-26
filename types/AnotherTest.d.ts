/// <reference types="react" />
export interface AnotherTestProps {
    /** The person you want to say goodbye to (required)*/
    name: string;
}
export default function AnotherTest({ name }: AnotherTestProps): JSX.Element;
