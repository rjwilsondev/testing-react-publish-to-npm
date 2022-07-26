/// <reference types="react" />
export interface TestProps {
    /** The person you want to say hello to*/
    name?: string;
}
export default function Test({ name }: TestProps): JSX.Element;
