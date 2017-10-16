using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace GameOfDrones.Models
{
    public class Round
	{
        public int Id { get; set; }
		public int player1 { get; set; }
		public int player2 { get; set; }
		public User winner { get; set; }

	}
}
