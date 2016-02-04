namespace Webstar.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SalesData : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SalesDatas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Year = c.Int(nullable: false),
                        KitchenAndBath = c.Int(nullable: false),
                        HomeAndGarden = c.Int(nullable: false),
                        Electronics = c.Int(nullable: false),
                        BooksAndMedia = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.SalesDatas");
        }
    }
}
