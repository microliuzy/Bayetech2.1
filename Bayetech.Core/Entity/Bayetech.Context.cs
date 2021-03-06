﻿

//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------


namespace Bayetech.Core.Entity
{

using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;


public partial class BayetechEntities : DbContext
{
    public BayetechEntities()
        : base("name=BayetechEntities")
    {

    }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        throw new UnintentionalCodeFirstException();
    }


    public virtual DbSet<Account> Account { get; set; }

    public virtual DbSet<Article> Article { get; set; }

    public virtual DbSet<ArticleContent> ArticleContent { get; set; }

    public virtual DbSet<Category> Category { get; set; }

    public virtual DbSet<Game> Game { get; set; }

    public virtual DbSet<Login> Login { get; set; }

    public virtual DbSet<MallOrderStatus> MallOrderStatus { get; set; }

    public virtual DbSet<Module> Module { get; set; }

    public virtual DbSet<vw_LoginInfo> vw_LoginInfo { get; set; }

    public virtual DbSet<GameInfoDescription> GameInfoDescription { get; set; }

    public virtual DbSet<GoodAndDescription> GoodAndDescription { get; set; }

    public virtual DbSet<MallGoodPictures> MallGoodPictures { get; set; }

    public virtual DbSet<vw_MallGoodInfo> vw_MallGoodInfo { get; set; }

    public virtual DbSet<vw_MallPictureInfo> vw_MallPictureInfo { get; set; }

    public virtual DbSet<MallOrder> MallOrder { get; set; }

    public virtual DbSet<GameProfession> GameProfession { get; set; }

    public virtual DbSet<Server> Server { get; set; }

    public virtual DbSet<vw_MallOrderInfo> vw_MallOrderInfo { get; set; }

    public virtual DbSet<Settings> Settings { get; set; }

    public virtual DbSet<vw_GameServers> vw_GameServers { get; set; }

    public virtual DbSet<Relationship> Relationship { get; set; }

    public virtual DbSet<MallWorkerType> MallWorkerType { get; set; }

    public virtual DbSet<MallDLType> MallDLType { get; set; }

    public virtual DbSet<ExtraPropertyValue> ExtraPropertyValue { get; set; }

    public virtual DbSet<MallDLInfo> MallDLInfoes { get; set; }

    public virtual DbSet<MallType> MallType { get; set; }

    public virtual DbSet<vw_MallDLInfo> vw_MallDLInfo { get; set; }

    public virtual DbSet<vw_NoToProperty> vw_NoToProperty { get; set; }

    public virtual DbSet<ExtraProperty> ExtraProperty { get; set; }

    public virtual DbSet<MallGoodInfo> MallGoodInfoes { get; set; }

    public virtual DbSet<vw_MallGoodSearch> vw_MallGoodSearch { get; set; }

    public virtual DbSet<vw_MallGoodMainInfo> vw_MallGoodMainInfo { get; set; }

    public virtual DbSet<vw_GoodTypes> vw_GoodTypes { get; set; }

}

}

