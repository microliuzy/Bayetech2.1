﻿using Bayetech.DAL.Entity;
using Bayetech.Service.IServices;
using System.Collections.Generic;
using System.Linq;

namespace Bayetech.Service.Services
{
    public partial class MallTypeService: IMallTypeService
    {
        public List<MallType> GetDataByGameId(int type,int id)
        {
            var db = GetContext();
            var a = db.MallType.Join(db.Relationship, m => m.Id, r => r.ParentKey, (m, r) => new { m });
            var b = a.ToList();
            var query = (from r in db.Relationship join m in db.MallType on r.Key equals m.Id
                        where r.Type == type && r.ParentKey == id
                        select new { m });
            return query.ToList().Select(m=>new MallType {Id = m.m.Id,Name = m.m.Name, }).ToList();
        }
    }
}
