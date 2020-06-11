package Chapter6ProgrammingQuestion10;

import java.util.Random;
import java.util.Scanner;

//10. Write a program that will allow two users to play tic-tac-toe. The program should

//ask for moves alternately from player X and player O. The program displays the
//game positions as follows:
//1 2 3
//4 5 6
//7 8 9
//The players enter their moves by entering the position number they wish to mark.
//After each move, the program displays the changed board. A sample board configuration
//is
//X X O
//4 5 6
//O 8 9

public class TicTacToeProject {
	static boolean isBoard[][] = new boolean[3][3];
	static int board[][] = new int[3][3];
	static Scanner input = new Scanner(System.in);

	public static void main(String[] args) {
		playTicTacToe();
	}

	public static void playTicTacToe() {
		setUpBoard();
		instructions(); // will displayBoard and will initiate begin game
	}

	///////////////////////////////////////////////
	// initial board setup
	public static void setUpBoard() {
		///////////////////////////
		// Set array to false

		for (int i = 0; i < isBoard.length; i++) {
			for (int j = 0; j < isBoard[i].length; j++) {
				isBoard[i][j] = false;
			}
		}
	}

	////////////////////////////////////////////////
	// Instructions
	public static void instructions() {
		System.out.println("Welcome to Tic-Tac-Toe!");
		System.out.println("This is a two player game, Player X and Player O.");
		System.out.println(
				"\nEach player will take turns selecting a number from the Tic-Tac-Toe board to mark their turn.");
		System.out.println("\nLet's play!");
		System.out.println("\nFirst we must see which player will be playing first.");
		System.out.println(
				"A dice will be rolled. If the dice is an even number, Player X will play first. If the dice is off, Player O will play first.");

		System.out.println("The dice will roll now.");
		Random rng = new Random();
		char playerOne;
		int playerOneNum;
		char playerTwo;
		int playerTwoNum;
		int roll = rng.nextInt(6) + 1;
		if (roll % 2 == 0) { // even number
			playerOne = 'X';
			playerOneNum = 88;
			playerTwo = 'O';
			playerTwoNum = 79;
		} else { // odd number
			playerOne = 'O';
			playerOneNum = 79;
			playerTwo = 'X';
			playerTwoNum = 88;
		}
		System.out.println("\nThe dice rolled " + roll + ". Player " + playerOne + " will play first.\n");
		getBoard();
		play(playerOne, playerTwo, playerOneNum, playerTwoNum);
	}

	///////////////////////////////////////////////
	// display initial board
	public static int[][] getBoard() {
		int count = 1;
		for (int i = 0; i < board.length; i++) {
			for (int j = 0; j < board[i].length; j++) {
				if (isBoard[i][j] == false) { // false == no user chose this number yet
					board[i][j] = count;
					System.out.print(board[i][j] + " ");
				} else { // isBoard == true
					System.out.print((char) board[i][j] + " ");
				}
				count++;
			}
			System.out.println();
		}
		return board;
	}

//////////////////////////////////////////////
// play the game
	public static void play(char playerOne, char playerTwo, int playerOneNum, int playerTwoNum) {
		int round = 1; // Counter for which round, cannot exceed 9 because there are only 9 numbers on
						// the board
		char player;
		int playerNum;

		while (round < 10) {
			if (round % 2 != 0) { // odd number = 1, 3, 5. First play needs to be playerOne
				player = playerOne;
				playerNum = playerOneNum;
			} else {
				player = playerTwo;
				playerNum = playerTwoNum;
			}
			System.out.println(
					"\nPlayer " + player + " enter the number in which you would like to convert to " + player + ".");
			int turnover = input.nextInt();
			if ((turnover < 1) || (turnover > 9) || (!verifyTurn(turnover, playerNum))) {
				System.out.println("Error: " + turnover + " is an invalid turn. Try again.");
				continue;
			} else { // number chosen is valid and is not already a position that was occupied.
				System.out.println();
				getBoard();
				if (getStatus(playerNum) == true) { // verify if player has won.
					System.out.println("Congratulations! Player " + player + " won!");
					System.exit(0);
				}
				round++;
			}
		}
		System.out.println("\nTie game.");
		System.exit(0);
	}
	
	public static boolean verifyTurn(int turnover, int playerNum) {
		
		switch (turnover) {
		case 1:
			if (isBoard[0][0] == false) {
				isBoard[0][0] = true;
				board[0][0] = playerNum;					// convert int value to ascii char where 'O' == 79 and 'X' == 88
				return true;
			}
			return false;
		case 2:
			if (isBoard[0][1] == false) {
				isBoard[0][1] = true;
				board[0][1] = playerNum;
				return true;
			}
			return false;
		case 3:
			if (isBoard[0][2] == false) {
				isBoard[0][2] = true;
				board[0][2] = playerNum;
				return true;
			} else {
				return false;
			}
		case 4:
			if (isBoard[1][0] == false) {
				isBoard[1][0] = true;
				board[1][0] = playerNum;
				return true;
			} else {
				return false;
			}
		case 5:
			if (isBoard[1][1] == false) {
				isBoard[1][1] = true;
				board[1][1] = playerNum;
				return true;
			} else {
				return false;
			}
		case 6:
			if (isBoard[1][2] == false) {
				isBoard[1][2] = true;
				board[1][2] = playerNum;
				return true;
			} else {
				return false;
			}
		case 7:
			if (isBoard[2][0] == false) {
				isBoard[2][0] = true;
				board[2][0] = playerNum;
				return true;
			} else {
				return false;
			}
		case 8:
			if (isBoard[2][1] == false) {
				isBoard[2][1] = true;
				board[2][1] = playerNum;
				return true;
			} else {
				return false;
			}
		case 9:
			if (isBoard[2][2] == false) {
				isBoard[2][2] = true;
				board[2][2] = playerNum;
				return true;
			} else {
				return false;
			}
		default:
			return false;
		}
	}

	public static boolean getStatus(int playerNum) {	// used to see if there's a winner between each play
		if (((board[0][0] == playerNum) && (board[0][1] == playerNum) && (board[0][2] == playerNum))
				|| ((board[1][0] == playerNum) && (board[1][1] == playerNum) && (board[1][2] == playerNum))
				|| ((board[2][0] == playerNum) && (board[2][1] == playerNum) && (board[2][2] == playerNum)) ||

				((board[0][0] == playerNum) && (board[1][0] == playerNum) && (board[2][0] == playerNum))
				|| ((board[0][1] == playerNum) && (board[1][1] == playerNum) && (board[2][1] == playerNum))
				|| ((board[0][2] == playerNum) && (board[1][2] == playerNum) && (board[2][2] == playerNum)) ||

				((board[0][0] == playerNum) && (board[1][1] == playerNum) && (board[2][2] == playerNum))
				|| ((board[0][2] == playerNum) && (board[1][1] == playerNum) && (board[2][0] == playerNum))) {
			return true;
		} else {
			return false;
		}
	}

}