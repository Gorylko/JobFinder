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
        private Item[] _items = new[]
        {
            new Item(){ Id = 1, Name = "Name1", Description = "Descr1"},
            new Item(){ Id = 2, Name = "Name2", Description = "Устанавливает курсивное начертание шрифта. Допустимо использовать этот тег совместно с другими тегами, которые определяют начертание текста."},
            new Item(){ Id = 3, Name = "Name3", Description = "Descr3"},
            new Item(){ Id = 4, Name = "Name4", Description = "Descr4"},
            new Item(){ Id = 5, Name = "Name5", Description = "Descr5"},
            new Item(){ Id = 6, Name = "Name6", Description = "Descr6"},
            new Item(){ Id = 1, Name = "Name1", Description = "Descr1"},
            new Item(){ Id = 2, Name = "Name2", Description = "Descr2"},
            new Item(){ Id = 3, Name = "Name3", Description = "Descr3"},
            new Item(){ Id = 4, Name = "Name4", Description = "Descr4"},
            new Item(){ Id = 5, Name = "Name5", Description = "Descr5"},
            new Item(){ Id = 6, Name = "Name6", Description = "Descr6"},
        };

        public ItemController(IItemService itemService)
        {
            this._itemService = itemService ?? throw new ArgumentNullException(nameof(itemService));
        }

        [HttpGet]
        public Item[] GetAll([FromQuery]int? categoryId)
        {
            return _items;
        }

        [HttpGet("{id}")]
        public Item GetById(int id)
        {
            return _itemService.GetById(id);
        }

        [HttpPost]
        public IActionResult Save(Item item)
        {
            if (item == null)
            {
                return BadRequest(new { errorText = "Invalid item" });
            }

            _itemService.Save(item);
            return Ok();
        }
    }
}