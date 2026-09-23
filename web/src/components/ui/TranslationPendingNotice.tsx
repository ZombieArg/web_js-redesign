import { getTranslations } from "next-intl/server";
import { Container } from "./Container";

export async function TranslationPendingNotice() {
  const t = await getTranslations("translation");
  return (
    <div className="border-b border-divider bg-surface-container-low py-3">
      <Container>
        <p className="text-caption text-on-surface-variant">{t("pendingNotice")}</p>
      </Container>
    </div>
  );
}
