using System;
using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.Models
{
    public class GameContext : DbContext
    {
       public GameContext(DbContextOptions<GameContext> opt) : base(opt)
        {
        }
        public DbSet<Match> MatchItems { get; set; }
    }
}
