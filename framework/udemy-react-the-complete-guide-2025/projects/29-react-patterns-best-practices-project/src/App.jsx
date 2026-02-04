import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
      </section>
      <Accordion className="accordion">
        <Accordion.Item id="experience" className="accordion-item">
          <Accordion.Title id="experience" className="accordion-item-title">
            We have 20 years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="experience">
            <article>
              <p>You can&apos;t go wrong with us!</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years.
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="local-guides" className="accordion-item">
          <Accordion.Title id="local-guides" className="accordion-item-title">
            We work with local guides
          </Accordion.Title>
          <Accordion.Content
            className="accordion-item-content"
            id="local-guides"
          >
            <article>
              <p>We are not doing this along from our office</p>
              <p>
                Instead, we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
