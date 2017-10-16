using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameOfDrones.Models
{
	public class User
	{
		public int Id { get; set; }
		public string Name { get; set; }

	}
}
