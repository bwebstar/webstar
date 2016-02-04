using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Webstar.Startup))]
namespace Webstar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
