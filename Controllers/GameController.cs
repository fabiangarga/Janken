using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GameOfDrones.Models;

namespace GameOfDrones.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {

        private readonly GameContext _context;

        public GameController(GameContext context)
        {

            _context = context;

        }

        [HttpPut("[action]")]
        public void SaveMatch([FromBody] Match match){
        
            _context.MatchItems.Add(match);
            _context.SaveChanges();

        }

        [HttpGet("[action]")]
        public ICollection<Match> GetAll(){
            
            return _context.MatchItems.ToList();
            
        }
        // TODO  Move class to Model folder dude -.-
       
    }
}
