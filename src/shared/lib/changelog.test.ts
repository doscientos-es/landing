import { describe, expect, it } from "vitest";
import changelog from "~/data/changelog.json";
import { footerLinkColumns } from "~/data/commercialRoutes";

describe("novedades", () => {
  it("has content and a discoverable public link without needing a build", () => {
    expect(changelog.releases.length).toBeGreaterThan(0);
    expect(changelog.releases[0]?.sections[0]?.items.length).toBeGreaterThan(0);
    expect(footerLinkColumns.flatMap((column) => column.links)).toContainEqual({
      label: "Novedades",
      href: "/changelog",
    });
  });
});
