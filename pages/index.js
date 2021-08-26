// index.js
import Form from "../components/Form/Form";

export default function Home() {
  return (
    <div className="dark">
      <main>
        <Form table="functions_emails" title="Functions" />
      </main>
    </div>
  );
}
