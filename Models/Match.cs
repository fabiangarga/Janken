using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameOfDrones.Models
{
	public class Match
	{
        public int Id { get; set; }
		public bool status { get; set; }
		public User player1 { get; set; }
		public User player2 { get; set; }
		public int player1Rounds { get; set; }
		public int player2Rounds { get; set; }
		public int round { get; set; }
		public int roundMax { get; set; }
		public List<Round> rounds { get; set; }
		public User winner { get; set; }

	}

	
}
