// this is now a server component by default
export const metadata = {
    title: "thevaibhav's lab",
    description: "Experiments & visuals from Vaibhav’s lab",
  };
  
  export default function LabLayout({ children }) {
    return <>{children}</>;
  }