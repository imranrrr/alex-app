import {
  Card,
  Page,
  Button
} from "@shopify/polaris";
import "./index.css";

export default function HomePage() {
  return (
    <Page>
      <div class="protection">
        <div class="protection__title">
          <h1>Protection</h1>
        </div>
        <Card>
          <div className="protection__container">
            <div className="protection__container__content" >
            <div className="protection__container__title">
              <p>
                Protection is <b>disabled</b>
              </p>
            </div>
            <div>
              <Button  primary >Enabled</Button>
            </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
}
