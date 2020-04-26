using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JobFinder.Business.Services.Interfaces;
using JobFinder.General.Entities;
using Microsoft.AspNetCore.Mvc;

namespace JobFinder.Web.Controllers.Sample
{
    [ApiController]
    [Route("api/v1/items")]
    public class ItemController : Controller
    {
        private IItemService _itemService;

        public ItemController(IItemService itemService)
        {
            this._itemService = itemService ?? throw new ArgumentNullException(nameof(itemService));
        }

        [HttpGet]
        public IEnumerable<Item> GetAll([FromQuery]int? categoryId)
        {
            return _itemService.GetAll().Result;
        }

        [HttpGet("{id}")]
        public Item GetById(int id)
        {
            return _itemService.GetById(id).Result;
        }

        [HttpPost]
        public IActionResult Save(Item item)
        {
            var result = _itemService.Save(item);

            if (!result.IsSuccessful)
            {
                return BadRequest(new { errorText = result.ErrorMessage });
            }

            return Ok();
        }
    }
}