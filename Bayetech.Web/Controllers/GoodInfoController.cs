﻿using Bayetech.Core;
using Bayetech.Core.Entity;
using Bayetech.Service;
using Bayetech.Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Bayetech.Web.Controllers
{
    public class GoodInfoController : Controller
    {
        GoodInfoService goodInfoService = new GoodInfoService();

        public IHttpActionResult GetList(int gameId,int groupId,int serverId,int typeId,string keyword)
        {
            var result = goodInfoService.GetList(gameId, groupId, serverId, typeId, keyword).ToList();
            return null;
        }
    }
}