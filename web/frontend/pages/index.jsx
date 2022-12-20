import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import "./index.css";

export default function HomePage() {
  const handlesubmit = () => {
    
  }
  return (
    <Page>
      <TitleBar title="App name" primaryAction={null} />
      <div class="protection">
        <div class="protection__title">
          <h1>Protection</h1>
        </div>
        <Card>
          <div class="protection__container">
            <div className="protection__container__title">
              <p>
                Protection is <b>disabled</b>
              </p>
            </div>
            <div class="protection__container__button" type="button">
              <button onClick={handlesubmit} >Enabled</button>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
}
