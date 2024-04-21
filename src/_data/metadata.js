/**
 * For variables that must be accessible from every template.
 *
 * Usage in nunjucks template: {{ metadata.<key> }}
 *
 * @returns Record<string, string>
 */
module.exports = function() {
    const staticOrigin = "https://pub-ea1b3388186e482ea39aa713d3e5aa47.r2.dev/static/";
    const speculumRelease = "speculum@1.3.0";

    const today8601 = new Date().toISOString().slice(0, 10);

    let footerDate = "2024";
    const curYear = parseInt(today8601.slice(0, 4));
    if (curYear > parseInt(footerDate)) {
        footerDate = `${footerDate}-${curYear}`;
    }

    return {
        title: "DepositDuck",
        domain: "example.com",  // TODO: read in from environment variables
        origin: "https://example.com",  // TODO: read in from environment variables
        speculumSource: `${staticOrigin}${speculumRelease}`,
        createdAt: today8601,
        updatedAt: today8601,
        footerDate
    };
};
