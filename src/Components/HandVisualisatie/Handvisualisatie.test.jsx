import React, { Suspense } from "react";
import renderer from "react-test-renderer";
import HandVisualisatie from "./HandVisualisatie";
import { AuthProvider } from "../../context/AuthContext";
import { DataProvider } from "../../context/DataContext";

describe("Snapshot Handvisualisatie", () => {
  it("takes snapshot and matchest it", async () => {
    const snapshot = await renderer
      .create(
        <Suspense fallback={<h1>Loading...</h1>} r3f>
          <AuthProvider>
            <DataProvider>
              <HandVisualisatie />
            </DataProvider>
          </AuthProvider>
        </Suspense>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
