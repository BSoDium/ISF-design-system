import { Stack, Text } from "@mantine/core";

export function ColorUsageTable() {
  return (
    <Stack
      gap="md"
      style={{
        borderTop: "2px solid var(--mantine-color-default-border)",
        paddingTop: "var(--mantine-spacing-md)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Rôle", "Token", "Usage"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  borderBottom: "1px solid var(--mantine-color-default-border)",
                }}
              >
                <Text fw={600} size="sm" ff="monospace" c="dimmed">
                  {h}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["Actions principales",      "deep-ocean",  "Boutons, liens, états actifs, anneaux de focus"],
            ["Accents naturels",          "forest",      "Indicateurs de succès, badges environnement, accents verts"],
            ["Fond (clair)",              "ivory-sand",  "Fonds de page, surfaces de cartes en mode clair"],
            ["Accents chauds",            "golden-dune", "Bordures décoratives, mises en évidence subtiles, badges"],
            ["Appel à l'action",          "copper",      "CTA principaux, alertes, notifications importantes"],
            ["Texte & surfaces sombres",  "midnight",    "Texte courant (clair), fonds en mode sombre"],
            ["Éléments atténués",         "sky-mist",    "États désactivés, texte de remplacement, séparateurs"],
            ["Neutres chauds",            "stone",       "Fonds secondaires, bordures subtiles, surfaces neutres"],
            ["Surface (virtuel)",         "surface",     "S'adapte automatiquement — ivory-sand / midnight"],
            ["Sur surface (virtuel)",     "onSurface",   "S'adapte automatiquement — midnight / ivory-sand"],
          ].map(([role, token, usage]) => (
            <tr key={token}>
              {[role, token, usage].map((cell, i) => (
                <td
                  key={i}
                  style={{
                    padding: "8px 12px",
                    borderBottom: "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  <Text
                    size="sm"
                    ff={i === 1 ? "monospace" : undefined}
                    c={i === 1 ? "dimmed" : undefined}
                  >
                    {cell}
                  </Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}
