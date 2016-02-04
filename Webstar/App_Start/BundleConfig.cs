using System.Web;
using System.Web.Optimization;

namespace Webstar
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/customjs").Include(
                      "~/Scripts/app/slick.min.js",
                      "~/Scripts/app/placeholdem.min.js",
                      "~/Scripts/app/wow.min.js",
                      "~/Scripts/app/scrollIt.min.js",
                      "~/Scripts/app/jquery.isotope.js",
                      "~/Scripts/app/nivo-lightbox.min.js",
                      "~/Scripts/app/jquery.sequence-min.js",
                      "~/Scripts/app/sequencejs-options.modern-slide-in.js",
                      "~/Scripts/app/scripts.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/css/bootstrap.css",
                      "~/Content/css/animate.css",
                      "~/Content/css/font-awesome.min.css",
                      "~/Content/css/slick.css",
                      "~/Content/css/site.css",
                      "~/Content/css/sequencejs-theme.modern-slide-in.css",
                      "~/Content/css/nivo-lightbox.css",
                      "~/Content/css/nivo_lightbox_themes/default/default.css"));
        }
    }
}
