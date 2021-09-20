using KAIS.HR_DYNAMIC.HR_STRIVE.API.Authentication;
using KAIS.HR_DYNAMIC.HR_STRIVE.COMMON.Utilities;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Model;
using KAIS.HR_DYNAMIC.HR_STRIVE.INFRASTRUCTURE.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KAIS.HR_DYNAMIC.HR_STRIVE.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<HR_STRIVE_DbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("KAIS.HR-DYNAMIC.HR-STRIVE.INFRASTRUCTURE"));
            });

            services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<HR_STRIVE_DbContext>().AddDefaultTokenProviders();
            //services.AddDbContext<HR_STRIVE_DbContext>();

            services.AddIdentityServer().AddDeveloperSigningCredential()
                // this adds the operational data from DB (codes, tokens, consents)
                .AddOperationalStore(options =>
                {
                    options.ConfigureDbContext = builder => builder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), b => b.MigrationsAssembly("KAIS.HR-DYNAMIC.HR-STRIVE.INFRASTRUCTURE"));
                    // this enables automatic token cleanup. this is optional.
                    options.EnableTokenCleanup = true;
                    options.TokenCleanupInterval = 30; // interval in seconds
                })
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients())
                .AddAspNetIdentity<AppUser>();

            services.AddControllersWithViews().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddScoped<IHR_STRIVE_Repository, HR_STRIVE_Repository>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddSwaggerGen(sgen =>
            {
                sgen.SwaggerDoc("v1", new OpenApiInfo { Title = "KAIS Solutions - HR-DYNAMIC HR-STRIVE API", Version = "v1" });
            });

            services.AddCors();
            services.AddMvc(option => option.EnableEndpointRouting = false);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseIdentityServer();
            var swaggerConfiguration = new SwaggerConfiguration();
            Configuration.GetSection(nameof(SwaggerConfiguration)).Bind(swaggerConfiguration);
            app.UseSwagger(option =>
            {
                option.RouteTemplate = swaggerConfiguration.JsonRoute;
            });

            app.UseSwaggerUI(option =>
            {
                option.SwaggerEndpoint(swaggerConfiguration.UiEndpoint, swaggerConfiguration.Description);
                option.RoutePrefix = string.Empty;
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors(options =>
            {
                options
                        .WithOrigins("http://localhost")
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();

            });

            app.UseMvc();
        }
    }
}
